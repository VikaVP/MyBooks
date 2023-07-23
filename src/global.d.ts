interface BooksData {
    author: string;
    cover: string;
    description: string;
    id: number;
    publicationDate: string;
    title: string;
}

interface StateFavorites {
    favoritesDatas: BooksData[]
}

interface Props {
    data: BooksData
};