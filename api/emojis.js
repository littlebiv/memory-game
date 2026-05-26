const EMOJI_API_BASE = "https://emojihub.yurace.pro/api/all/category"

export async function fetchEmojisByCategory(category) {
    const response = await fetch(`${EMOJI_API_BASE}/${category}`)

    if (!response.ok) {
        throw new Error("Could not fetch data from API")
    }

    return response.json()
}
