export interface Video {
    [key: string]: videoInterface
}
interface videoInterface {
    video_id: number;
    title: string;
    preview: string | undefined;
    is_series: boolean;
    actors: string[];
    genre: string[];
    addition: {
        year: number;
        age: number;
        episodeNum: number;
    },
    time: {
        runningTime: number;
        watchTime: number;
    }
    is_liked: boolean;
    is_subscribed: boolean;
    latest_view: number;
    series_data: {
        episode_id: number;
        contents: string;
        runningTime: number;
    }
}