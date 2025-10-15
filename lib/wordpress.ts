import { GraphQLClient } from 'graphql-request';

// Types
export interface FeaturedImage {
  node: {
    sourceUrl: string;
    altText: string;
  };
}

export interface Post {
  id: string;
  title: string;
  excerpt: string;
  slug: string;
  date: string;
  content: string;
  category?: string;
  featuredImage?: FeaturedImage;
}

export interface PostsResponse {
  posts: {
    nodes: Post[];
  };
}

export interface PostResponse {
  post: Post;
}

const endpoint = process.env.WORDPRESS_API_URL;

if (!endpoint) {
  throw new Error('WORDPRESS_API_URL is not defined');
}

export const client = new GraphQLClient(endpoint, {
  headers: {
    'Content-Type': 'application/json',
  },
});

export async function fetchAPI<T>(
  query: string,
  variables?: Record<string, any>
): Promise<T> {
  try {
    const data = await client.request<T>(query, variables);
    return data;
  } catch (error) {
    console.error('GraphQL Error:', error);
    throw error;
  }
}