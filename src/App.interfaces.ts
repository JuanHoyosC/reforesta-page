export interface User {
  user_id: number;
  user: string;
  token: string;
}

interface IModel {
  is_active: boolean;
}

export interface IGallery extends IModel {
  gallery_id: number;
  gallery_image: string;
}

export interface IPartner extends IModel {
  partner_id: number;
  partner_image: string;
}

export interface ISlider extends IModel {
  slider_id: number;
  slider_title: string;
  slider_description: string;
  slider_image: string;
}

export interface IProject {
  project_id: number;
  project_title: string;
  project_body: string;
  project_image: string;
  project_slug: string;
}

export interface ISocialNetwork extends IModel {
  network_id: number;
  network_type: string;
  network_url: string;
  network_image: string;
}

export interface IDonation {
  donation_id: number;
  donation_description: string;
}

export interface IContact {
  contact_id: number;
  contact_type: string;
  contact_description: string;
  contact_url: string;
}

export interface IDashboard {
  projects: number | string;
  gallery: number | string;
  sliders: number | string;
  partners: number | string;
}
