export interface Blog {
    id: number;
    title: string;
    slug: string;
    lang: string;
    date: string;
    content: string;
    writer?: string; // Assuming the API returns an author
  }
  
  export interface ApiResponse<T> {
    data: T;
    meta: any;
  }
  
  export async function fetchBlogs(
    page: number = 1,
    perPage: number = 100
  ): Promise<{ data: Blog[], meta: any }> {
    const runtimeConfig = useRuntimeConfig();
  
    // Building query parameters
    let qp: Record<string, any> = {
      page,
      perPage,
      include: ['author']
    };
  
    try {
      // Fetching articles from the API
      const response = await $fetch<ApiResponse<Blog[]>>(`${runtimeConfig.public.API_URL}/blogs`, {
        headers: {
          // Add any required headers here
        },
        query: qp,
      });
  
      // Assuming the API returns the articles in `data` and pagination info in `meta`
      return {
        data: response.data,
        meta: response.meta,
      };
    } catch (error) {
      console.error('Error fetching articles:', error);
      throw error; // Re-throwing the error to handle it further upstream if necessary
    }
  }
  