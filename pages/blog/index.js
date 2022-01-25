/* eslint-disable react/jsx-key */
/* eslint-disable @next/next/link-passhref */
import Link from 'next/link'
import { getAllNodes } from 'next-mdx/server'
import { AiOutlineArrowRight } from 'react-icons/ai';
import { positions } from '@mui/system';

function BlogPage({ posts }) {
    console.log(posts)
    return (
        <div className="site-container">
            <div className="space-y-10">
                { posts.map((post) => {
                    return (
                        <article key={ post.url }>

                            <button className="text-xl border-2 rounded-full bg-violet-200">
                                { post.relationships.category?.map((category, index) => (
                                    <span fontWeight="semibold" key={ category.slug }>
                                        { index !== 0 && " and " }{ "  " }
                                        <Link href={ category.url }>{ category.frontMatter.name }</Link>
                                    </span>
                                )) }
                            </button>
                            <h2 className="text-2xl font-bold hover:text-violet-400">
                                <Link href={ post.url }>
                                    <p >{ post.frontMatter.title }</p>
                                </Link>
                            </h2>
                            <p>{ post.frontMatter.excerpt }</p>
                            <div className="text-gray-400">
                                <span>{ post.frontMatter.date }</span>
                            </div>
                            <div>
                                <Link href={ post.url }>
                                    <p className="flex rounded-full hover:text-violet-800">
                                        Devamını Oku  <AiOutlineArrowRight className='text-xl ml-1 mt-1' />
                                    </p>
                                </Link>
                            </div>
                        </article >
                    )
                }) }
            </div >
        </div >
    )
}

export async function getStaticProps() {
    return {
        props: {
            posts: await getAllNodes('post')
        }
    }
}

export default BlogPage