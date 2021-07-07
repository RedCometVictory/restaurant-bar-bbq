// runa st build time, can fetch data (asynchronously) and build pages based on a template file; utilize graphql and actions to generate pages

// exports.createPages = async ({ actions: { createPage }, graphql}) => {'
// only the slug is needed to generate the page of the post (its unique url)
const path = require('path');
exports.createPages = async ({ graphql, actions }) => {
  const { data } = await graphql(`
    query Blogs {
      allMdx {
        nodes {
          frontmatter {
            slug
          }
        }
      }
    }
  `);

  // cycle through all of the items in the data (all posts) - nodes is an array - actions.createPage is used to generate a page for each individual item, pass an object telling gatsby what template of components to use in order to generate the page, including even the path/route and data passed into the generated page(s). path property generates the url route of the page (using the slug data), component must utilize an absolute path, './' refers to the current directory. Context, an object, is for deciding what data or variables is passed into the template. slug is passed into context as a query variable, thus now within the template file, it will now be able to acccess the slug query variable and its value, using the slug the tempate will then be able to access the posts of matcching slugs and access all of the data of the respective post
  data.allMdx.nodes.forEach(node => {
    actions.createPage({
      // path: '/blogs/post/' + node.frontmatter.slug,
      path: `/blogs/${node.frontmatter.slug}`,
      // path: node.frontmatter.slug,
      component: path.resolve('./src/templates/blog-details.js'),
      context: {
        slug: node.frontmatter.slug
      }
    })
  })
};


// exports.createPages = async ({ graphql, actions }) => {
//   const {data} = await graphql`
//     query {
//       allMdx(sort: {fields: frontmatter___date, order: DESC}) {
//         edges {
//           node {
//             frontmatter {
//               slug
//             }
//             id
//           }
//         }
//       }
//     }
//   `

//   // create paginated pages for blogs posts
//   const postPerPage = 5;
//   // num pages needed
//   const numPages = Math.ceil(data.allMdx.edges.length / postPerPage);

//   // create arr from lenght of pages needed
//   // first arg not used as a callback, ignore via _,
//   // i = index of the array
//   // first index is 0 in arr, thus route is default /
//   Array.from({ length: numPages }).forEach((_, i) => {
//     actions.createPages({
//       path: i === 0 ? `/` : `/${i + 1}`,
//       component: require.resolve("./src/templates/allPosts.js"),
//       context: {
//         limit: postPerPage,
//         skip: i * postPerPage,
//         numPages,
//         currentPage: i + 1
//       }
//     })
//   })
//   // create single blog posts
//   // for each page read the slug and id, the id is used for the graphql of the indiv post template to pull the proper post info
//   data.allMdx.edges.forEach(edge => {
//     const slug = edge.node.frontmatter.slug;
//     const id = edge.node.id;
//     action.createPages({
//       path: slug,
//       component: require.resolve(`./src/templates/singlePost.js`),
//       context: {id}
//     })
//   })
// }

// /*
// query MyQuery {
//   allMdx {
//     edges {
//       node {
//         frontmatter {
//           title
//           slug
//           date
//           description
//           featureImage
//         }
//       }
//     }
//   }
// }

//   // const data = await graphql(`
//   //   query MyQuery {
//   //     allContentJson(sort: {fields: blogs___date, order: DESC}) {
//   //       edges {
//   //         node {
//   //           blogs {
//   //             title
//   //             date
//   //             image
//   //             description
//   //           }
//   //           id
//   //         }
//   //       }
//   //     }
//   //   }
//   // `);
// */