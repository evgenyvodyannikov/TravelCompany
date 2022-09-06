const posts = [
    {
        title: 'Title',
        content: 'lorem dsadlad dsal asl aslsal ak fans ivd 9a8sdn9u adna slw dw9 w nkowodl  w09a spf snafjk'
    },
    {
        title: 'Title',
        content: 'lorem dsadlad dsal asl aslsal ak fans ivd 9a8sdn9u adna slw dw9 w nkowodl  w09a spf snafjk'
    },
    {
        title: 'Title',
        content: 'lorem dsadlad dsal asl aslsal ak fans ivd 9a8sdn9u adna slw dw9 w nkowodl  w09a spf snafjk'
    },
];
// script doesnt create post actually...
const getArticleElement = (post) => `<article><h3>${post.title}</h3><div><p>${post.content}</p></div></article>`

const section = document.querySelector('section');
section.innerHTML = getArticleElement(post[0])

//debugger;