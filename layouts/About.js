import { markdownify } from "@lib/utils/textConverter";
import shortcodes from "@shortcodes/all";
import { MDXRemote } from "next-mdx-remote";
import Image from "next/image";

const About = ({ data }) => {
  const { frontmatter, mdxContent } = data;
  const { title, image, education, experience } = frontmatter;

  return (
    <section className="section mt-16">
      <div className="container flex gap-10">
        {image && (
          <div className="mb-8">
            <Image
              src={image}
              width={649}
              height={308}
              alt={title}
              className="rounded-lg"
              priority={true}
            />
          </div>
        )}
        <div> 
{markdownify(title, "h1", "h1 text-left lg:text-[55px] mt-12")}
        <div className="content text-left">
          <MDXRemote {...mdxContent} components={shortcodes} />
        </div>
<p> Hi I'm Stefan. </p>
</div>       
         

      </div>
    </section>
  );
};

export default About;
