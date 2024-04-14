
export const getGroups = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/group/?search=`, {cache: "no-store"})
    if (!res.ok) {
        throw new Error("fail to fatch data")
    }
    return res.json()
}