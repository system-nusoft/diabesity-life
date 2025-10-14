export interface BlogContent {
  slug: string;
  content: React.ReactNode;
}

export const blogContents: Record<string, React.ReactNode> = {
  "how-semaglutide-changes-lives": (
    <>
      <p>
        How semaglutide works: Semaglutide is a glucagon-like peptide-1 (GLP-1)
      </p>
    </>
  ),
  "getting-rid-of-obesity-the-real-challenge": (
    <>
      <p>
        Obesity is a complex condition with multiple contributing factors,
        including genetics, environment, metabolism, and behavior.
      </p>
    </>
  ),
  default: (
    <>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </p>
      <p>
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
        dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
        proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>
      <h2 className="text-2xl font-bold mt-8 mb-4">Understanding Diabesity</h2>
      <p>
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem
        accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab
        illo inventore veritatis et quasi architecto beatae vitae dicta sunt
        explicabo.
      </p>
      <p>
        Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
        fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem
        sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor
        sit amet, consectetur, adipisci velit.
      </p>
      <h2 className="text-2xl font-bold mt-8 mb-4">Key Takeaways</h2>
      <ul className="list-disc pl-6 space-y-2">
        <li>
          Regular monitoring of blood sugar levels is essential for managing
          diabesity
        </li>
        <li>
          A balanced diet tailored to Pakistani cuisine can help control symptoms
        </li>
        <li>
          Physical activity for at least 30 minutes daily is recommended
        </li>
        <li>
          Consulting healthcare professionals regularly ensures proper management
        </li>
      </ul>
      <p className="mt-6">
        At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis
        praesentium voluptatum deleniti atque corrupti quos dolores et quas
        molestias excepturi sint occaecati cupiditate non provident.
      </p>
    </>
  ),
};

// Helper function to get content for a blog post
export function getBlogContent(slug: string): React.ReactNode {
  return blogContents[slug] || blogContents.default;
}
