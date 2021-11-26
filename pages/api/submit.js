// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const handler = async (req, res) => {
    const response = await fetch(
        process.env.API_URL,
        {
            method: 'POST',
            headers: new Headers({ 'content-type': 'application/json' }),
            body: JSON.stringify(req.body)
        }
    )
    res.status(response.status).json({})
}

export default handler