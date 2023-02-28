import musics from "./musics";
import games from "./games";
import movies from "./movies";

export default function chooseCategory(category) {
    switch (category) {
        case 'musics':
            return musics;
        case 'games':
            return games;
        case 'movies':
            return movies;
    }
}