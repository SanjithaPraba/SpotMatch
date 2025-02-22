import requests
import os

load_dotenv()

api_key = os.getenv("RAPIDAPI_KEY")

def fetch_places(query, lat, lon, limit=20):
    """Fetch businesses from RapidAPI Local Business Search"""
    url = "https://local-business-data.p.rapidapi.com/search"

    querystring = {
        "query": query,
        "limit": str(limit),
        "lat": str(lat),
        "lng": str(lon),
        "zoom": "13",
        "language": "en",
        "region": "us",
        "extract_emails_and_contacts": "false"
    }

    headers = {
        "x-rapidapi-host": "local-business-data.p.rapidapi.com",
        "x-rapidapi-key": RAPIDAPI_KEY
    }

    response = requests.get(url, headers=headers, params=querystring)

    if response.status_code == 200:
        return response.json().get("data", [])  # Extract business data
    else:
        return []
