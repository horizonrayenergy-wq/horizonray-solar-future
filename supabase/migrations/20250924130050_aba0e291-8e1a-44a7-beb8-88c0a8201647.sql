-- Create admin dashboard tables

-- Update leads table to include source and better tracking
ALTER TABLE public.leads ALTER COLUMN status SET DEFAULT 'no idea';

-- Create social_links table for admin to manage social media
CREATE TABLE public.social_links (
  id uuid NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  platform text NOT NULL,
  url text NOT NULL,
  is_active boolean NOT NULL DEFAULT true,
  updated_at timestamp with time zone NOT NULL DEFAULT now(),
  created_at timestamp with time zone NOT NULL DEFAULT now()
);

-- Enable RLS on social_links
ALTER TABLE public.social_links ENABLE ROW LEVEL SECURITY;

-- RLS policies for social_links
CREATE POLICY "Public can view social links" 
ON public.social_links FOR SELECT 
USING (is_active = true);

CREATE POLICY "Admins can manage social links" 
ON public.social_links FOR ALL 
USING (has_role(auth.uid(), 'admin'::app_role))
WITH CHECK (has_role(auth.uid(), 'admin'::app_role));

-- Create company_settings table
CREATE TABLE public.company_settings (
  key text NOT NULL PRIMARY KEY,
  value text,
  updated_at timestamp with time zone NOT NULL DEFAULT now()
);

-- Enable RLS on company_settings
ALTER TABLE public.company_settings ENABLE ROW LEVEL SECURITY;

-- RLS policies for company_settings
CREATE POLICY "Admins can manage company settings" 
ON public.company_settings FOR ALL 
USING (has_role(auth.uid(), 'admin'::app_role))
WITH CHECK (has_role(auth.uid(), 'admin'::app_role));

CREATE POLICY "Public can view company address" 
ON public.company_settings FOR SELECT 
USING (key = 'company_address');

-- Insert default social links
INSERT INTO public.social_links (platform, url) VALUES
('facebook', '#'),
('instagram', '#'),
('youtube', '#');

-- Insert default company settings
INSERT INTO public.company_settings (key, value) VALUES
('company_address', 'Shiv Nagar, Near Bypass, Nibri Road, Kuchera, Dist-Nagaur, Rajasthan - 341024'),
('company_phone', '+91 9782816418'),
('company_email', 'horizonrayenergy@gmail.com');

-- Create trigger for social_links updated_at
CREATE TRIGGER update_social_links_updated_at
  BEFORE UPDATE ON public.social_links
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();

-- Create trigger for company_settings updated_at  
CREATE TRIGGER update_company_settings_updated_at
  BEFORE UPDATE ON public.company_settings
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();