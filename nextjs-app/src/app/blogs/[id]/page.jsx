const BlogDetails = async ({ params }) => {
  const blogsData = [
    {
      blog_id: 1,
      blog_name: "Eco Living Tips",
      description:
        "Learn how to live sustainably and reduce your carbon footprint.",
    },
    {
      blog_id: 2,
      blog_name: "Adventure Awaits",
      description: "Explore thrilling travel destinations around the globe.",
    },
    {
      blog_id: 3,
      blog_name: "Tech Trends 2025",
      description: "Stay updated with the latest in technology and innovation.",
    },
    {
      blog_id: 4,
      blog_name: "Healthy Eating",
      description: "Discover nutritious recipes and healthy lifestyle tips.",
    },
    {
      blog_id: 5,
      blog_name: "Fitness First",
      description: "Your guide to achieving your fitness goals effectively.",
    },
    {
      blog_id: 6,
      blog_name: "Coding Chronicles",
      description: "Insights and tips for programmers and developers.",
    },
    {
      blog_id: 7,
      blog_name: "Startup Success",
      description: "Practical advice for budding entrepreneurs.",
    },
    {
      blog_id: 8,
      blog_name: "Finance Freedom",
      description: "Manage your finances and achieve financial independence.",
    },
    {
      blog_id: 9,
      blog_name: "Mindful Living",
      description: "Embrace mindfulness and improve your mental well-being.",
    },
    {
      blog_id: 10,
      blog_name: "Pet Parenthood",
      description: "Guidance and tips for caring for your furry friends.",
    },
    {
      blog_id: 11,
      blog_name: "Photography Passion",
      description: "Master the art of photography and storytelling.",
    },
    {
      blog_id: 12,
      blog_name: "Book Haven",
      description: "Dive into the world of books and discover new reads.",
    },
    {
      blog_id: 13,
      blog_name: "Movie Buffs",
      description: "Reviews, insights, and trivia for movie enthusiasts.",
    },
    {
      blog_id: 14,
      blog_name: "DIY Crafting",
      description: "Get creative with simple and fun DIY projects.",
    },
    {
      blog_id: 15,
      blog_name: "Fashion Forward",
      description: "Stay trendy with the latest in fashion and style.",
    },
    {
      blog_id: 16,
      blog_name: "Gaming Zone",
      description: "Reviews and updates for gamers around the world.",
    },
    {
      blog_id: 17,
      blog_name: "Home Gardening",
      description: "Grow your own food and flowers with gardening tips.",
    },
    {
      blog_id: 18,
      blog_name: "Life Hacks",
      description:
        "Simplify your daily life with creative and practical hacks.",
    },
    {
      blog_id: 19,
      blog_name: "Music Vibes",
      description: "Discover new music and dive into the world of melodies.",
    },
    {
      blog_id: 20,
      blog_name: "Science Simplified",
      description: "Explore the wonders of science in simple terms.",
    },
  ];

  const { id } = await params;
  const blog = blogsData.find((blog) => blog.blog_id === parseInt(id));
  return (
    <div className="border-2 border-gray-400 rounded-md max-w-80 mx-auto mt-20 text-center p-4">
      <h1 className="text-2xl font-semibold">Blog Id: {blog?.blog_id}</h1>
      <h2>{blog.blog_name}</h2>
      <p className="text-sm">{blog.description}</p>
    </div>
  );
};

export default BlogDetails;
