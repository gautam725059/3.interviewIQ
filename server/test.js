async function test() {
    try {
        const res = await fetch('http://localhost:8000/api/auth/google', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: "Test User",
                email: "test@example.com"
            })
        });
        const data = await res.json();
        console.log("Status:", res.status);
        console.log("Data:", data);
    } catch (error) {
        console.error("Fetch error:", error);
    }
}
test();
