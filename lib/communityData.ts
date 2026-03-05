export interface Post {
  id: string;
  title: string;
  content: string;
  author: {
    id: string;
    email: string;
    name: string;
  };
  createdAt: string;
  likes: number;
  commentsCount: number;
  tags: string[];
}

export interface Comment {
  id: string;
  postId: string;
  content: string;
  author: {
    id: string;
    email: string;
    name: string;
  };
  createdAt: string;
  likes: number;
}

// Mock posts data
export const mockPosts: Post[] = [
  {
    id: "1",
    title: "How do you manage sugar cravings on GLP-1 medication?",
    content:
      "I've been on Semaglutide for about 3 weeks now and while my appetite has decreased significantly, I still get intense sugar cravings in the evening. Has anyone else experienced this? What strategies have worked for you?",
    author: {
      id: "user1",
      email: "sarah.khan@email.com",
      name: "Sarah K.",
    },
    createdAt: "2026-02-23T10:30:00Z",
    likes: 24,
    commentsCount: 8,
    tags: ["GLP-1", "Semaglutide", "Diet"],
  },
  {
    id: "2",
    title: "My 6-month journey with Type 2 Diabetes - A success story",
    content:
      "Six months ago, my HbA1c was 9.2%. After making significant lifestyle changes including diet modification, regular walking, and following my doctor's medication plan, I'm happy to share that my latest reading is 6.8%! I wanted to share what worked for me and hopefully inspire others on their journey.",
    author: {
      id: "user2",
      email: "ahmed.raza@email.com",
      name: "Ahmed R.",
    },
    createdAt: "2026-02-22T15:45:00Z",
    likes: 156,
    commentsCount: 32,
    tags: ["Success Story", "Type 2", "Excercise"],
  },
  {
    id: "3",
    title: "Best time to take Semaglutide?",
    content:
      "My doctor prescribed Semaglutide 500mg twice daily but didn't specify the exact timing. Should I take it before meals, with meals, or after meals? I've heard different things from different people and I'm confused.",
    author: {
      id: "user3",
      email: "fatima.ali@email.com",
      name: "Fatima A.",
    },
    createdAt: "2026-02-22T09:15:00Z",
    likes: 18,
    commentsCount: 12,
    tags: ["Semaglutide", "Medication", "Question"],
  },
  {
    id: "4",
    title: "Desi food options that don't spike blood sugar",
    content:
      "I've been trying to find Pakistani/Indian food options that are diabetes-friendly. Tired of eating boiled vegetables! Has anyone found good recipes or restaurant options that work well with blood sugar management?",
    author: {
      id: "user4",
      email: "bilal.hassan@email.com",
      name: "Bilal H.",
    },
    createdAt: "2026-02-21T18:20:00Z",
    likes: 89,
    commentsCount: 45,
    tags: ["Diet", "Recipes"],
  },
  {
    id: "5",
    title: "Injection site rotation - tips needed",
    content:
      "I just started on insulin injections and my nurse mentioned I need to rotate injection sites. Can someone explain the best way to do this? Are there any apps or methods to track where I've injected?",
    author: {
      id: "user5",
      email: "zainab.mahmood@email.com",
      name: "Zainab M.",
    },
    createdAt: "2026-02-21T11:00:00Z",
    likes: 31,
    commentsCount: 15,
    tags: ["Insulin", "Medication"],
  },
];

// Mock comments data
export const mockComments: Comment[] = [
  {
    id: "c1",
    postId: "1",
    content:
      "I had the same issue! What helped me was having a small portion of fruit with some nuts in the evening. The fiber and protein combo really helped curb the cravings without spiking my blood sugar.",
    author: {
      id: "user6",
      email: "maria.khan@email.com",
      name: "Maria K.",
    },
    createdAt: "2026-02-23T11:15:00Z",
    likes: 12,
  },
  {
    id: "c2",
    postId: "1",
    content:
      "Sugar-free jello has been my lifesaver! Zero carbs and satisfies that sweet tooth. Also, staying well hydrated throughout the day really helps reduce cravings.",
    author: {
      id: "user7",
      email: "hassan.ali@email.com",
      name: "Hassan A.",
    },
    createdAt: "2026-02-23T12:30:00Z",
    likes: 8,
  },
  {
    id: "c3",
    postId: "1",
    content:
      "My doctor told me the cravings usually subside after 4-6 weeks on the medication. Hang in there! It gets better.",
    author: {
      id: "user8",
      email: "ayesha.omar@email.com",
      name: "Ayesha O.",
    },
    createdAt: "2026-02-23T14:00:00Z",
    likes: 15,
  },
  {
    id: "c4",
    postId: "1",
    content:
      "I switched to dark chocolate (85% cocoa) when I get cravings. A small piece really helps and it has less sugar impact.",
    author: {
      id: "user2",
      email: "ahmed.raza@email.com",
      name: "Ahmed R.",
    },
    createdAt: "2026-02-23T15:45:00Z",
    likes: 6,
  },
  {
    id: "c5",
    postId: "2",
    content:
      "This is so inspiring! Congratulations on your progress. Would you mind sharing your typical daily meal plan?",
    author: {
      id: "user1",
      email: "sarah.khan@email.com",
      name: "Sarah K.",
    },
    createdAt: "2026-02-22T16:30:00Z",
    likes: 20,
  },
  {
    id: "c6",
    postId: "2",
    content:
      "Amazing achievement! I'm at the beginning of my journey with HbA1c at 8.5%. This gives me hope that I can also bring it down.",
    author: {
      id: "user3",
      email: "fatima.ali@email.com",
      name: "Fatima A.",
    },
    createdAt: "2026-02-22T17:00:00Z",
    likes: 14,
  },
  {
    id: "c7",
    postId: "3",
    content:
      "Take it with meals to reduce stomach upset. I take mine right at the start of breakfast and dinner.",
    author: {
      id: "user2",
      email: "ahmed.raza@email.com",
      name: "Ahmed R.",
    },
    createdAt: "2026-02-22T10:00:00Z",
    likes: 9,
  },
  {
    id: "c8",
    postId: "3",
    content:
      "My pharmacist recommended taking it in the middle of meals. This has worked well for me with minimal side effects.",
    author: {
      id: "user4",
      email: "bilal.hassan@email.com",
      name: "Bilal H.",
    },
    createdAt: "2026-02-22T11:30:00Z",
    likes: 7,
  },
];

// Helper functions
export function getAllPosts(): Post[] {
  return mockPosts.sort(
    (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  );
}

export function getPostById(id: string): Post | undefined {
  return mockPosts.find((post) => post.id === id);
}

export function getCommentsByPostId(postId: string): Comment[] {
  return mockComments
    .filter((comment) => comment.postId === postId)
    .sort(
      (a, b) =>
        new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    );
}

export function formatTimeAgo(dateString: string): string {
  const date = new Date(dateString);
  const now = new Date();
  const diffInSeconds = Math.floor((now.getTime() - date.getTime()) / 1000);

  if (diffInSeconds < 60) {
    return "just now";
  } else if (diffInSeconds < 3600) {
    const minutes = Math.floor(diffInSeconds / 60);
    return `${minutes} minute${minutes > 1 ? "s" : ""} ago`;
  } else if (diffInSeconds < 86400) {
    const hours = Math.floor(diffInSeconds / 3600);
    return `${hours} hour${hours > 1 ? "s" : ""} ago`;
  } else if (diffInSeconds < 604800) {
    const days = Math.floor(diffInSeconds / 86400);
    return `${days} day${days > 1 ? "s" : ""} ago`;
  } else {
    return date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  }
}
