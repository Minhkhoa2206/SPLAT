export default async function handler(req, res) {

    const { shopid, itemid } = req.query;

    if(!shopid || !itemid){

        return res.status(400).json({
            error:"Missing params"
        });
    }

    try{

        const response = await fetch(

            `https://shopee.vn/api/v4/item/get?itemid=${itemid}&shopid=${shopid}`,

            {
                headers:{

                    "User-Agent":
                    "Mozilla/5.0",

                    "Referer":
                    "https://shopee.vn/",

                    "Origin":
                    "https://shopee.vn"
                }
            }
        );

        const data =
        await response.json();

        res.status(200).json(data);

    }catch(err){

        res.status(500).json({
            error:err.toString()
        });
    }
}
