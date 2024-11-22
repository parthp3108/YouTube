const GOOGLE_API_KEY = "AIzaSyAmKLw3kz9vn8bInON5ZrDAZ8PtwcK4330";

export const YOUTUBE_API_URL = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet,contentDetails,statistics&chart=mostPopular&maxResults=50&regionCode=IN&key=${GOOGLE_API_KEY}`;

export const YOUTUBE_SEARCH_URL="http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";
