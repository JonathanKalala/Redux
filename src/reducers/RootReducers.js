const initState = {
    posts:[ 
        {
            id: "1",
            title: "Je suis le premiere article",
            body: "voici le contenu de notre premier article, aha !"
        },
        {
            id: "2",
            title: "Je suis le deuxieme article",
            body: "voici le contenu de notre deuxieme article, aha !"
        },
        {
            id: "3",
            title: "Je suis le troisieme article",
            body: "voici le contenu de notre trosieme article, aha !"
        },
        {
            id: "4",
            title: "Je suis le quatrieme article",
            body: "voici le contenu de notre quatrieme article, aha !"
        },
        {
            id: "5",
            title: "Je suis le cinquieme article",
            body: "voici le contenu de notre cinquieme article, aha !"
        }
    ]
}

const rootReducer = (state= initState, action) => {
    return state;
}

export default rootReducer; 