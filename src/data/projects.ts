export interface Project {
  id: string;
  title: string;
  category: string;
  coverImage: string;
  images: string[];
}

export const projects: Project[] = [
  {
    "id": "project-1",
    "title": "Garden Design",
    "category": "Landscaper",
    "coverImage": "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&q=80&auto=format&fit=crop",
    "images": [
      "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&q=80&auto=format&fit=crop"
    ]
  },
  {
    "id": "project-2",
    "title": "Landscaping Services",
    "category": "Landscaper",
    "coverImage": "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&q=80&auto=format&fit=crop",
    "images": [
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&q=80&auto=format&fit=crop"
    ]
  },
  {
    "id": "project-3",
    "title": "Lawn Care",
    "category": "Landscaper",
    "coverImage": "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&q=80&auto=format&fit=crop",
    "images": [
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&q=80&auto=format&fit=crop"
    ]
  }
];
export const categories: string[] = ["Landscaper"];
