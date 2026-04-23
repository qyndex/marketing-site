import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.PUBLIC_SUPABASE_URL ?? "";
const supabaseAnonKey = import.meta.env.PUBLIC_SUPABASE_ANON_KEY ?? "";

/**
 * Supabase client for server-side data fetching during Astro builds
 * and client-side form submissions.
 *
 * Returns `null` when credentials are not configured so the site
 * degrades gracefully to hardcoded fallback data.
 */
export const supabase =
  supabaseUrl && supabaseAnonKey
    ? createClient(supabaseUrl, supabaseAnonKey)
    : null;

// ----- Types -----

export interface Testimonial {
  id: string;
  author_name: string;
  author_role: string | null;
  company: string | null;
  content: string;
  avatar_url: string | null;
  featured: boolean;
  sort_order: number;
  created_at: string;
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string | null;
  content: string;
  author_name: string;
  published_at: string | null;
  created_at: string;
}

// ----- Data fetchers (used at build time) -----

export async function getTestimonials(): Promise<Testimonial[]> {
  if (!supabase) return [];
  const { data, error } = await supabase
    .from("testimonials")
    .select("*")
    .order("sort_order", { ascending: true });
  if (error) {
    console.error("Failed to fetch testimonials:", error.message);
    return [];
  }
  return data as Testimonial[];
}

export async function getBlogPosts(): Promise<BlogPost[]> {
  if (!supabase) return [];
  const { data, error } = await supabase
    .from("blog_posts")
    .select("*")
    .not("published_at", "is", null)
    .order("published_at", { ascending: false });
  if (error) {
    console.error("Failed to fetch blog posts:", error.message);
    return [];
  }
  return data as BlogPost[];
}
