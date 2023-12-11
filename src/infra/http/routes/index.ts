import { Router } from 'express';

const router = Router();

router.get('/', async (req, res) => {
    const result = fetch(
        'http://localhost:3333/graphql', {
        method: 'POST',      
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          query: `{
            getAllProducts {
                stock {
                  status
                  product_id
                  id
                  available_quantity
                }
                name
                sku
                image    
            }
          }`
        })
    }).then(res => res.json())
    .catch(err => console.log(err));

    const {data} = await result;

    return res.render('main/index', {products: data.getAllProducts})
})

export {router};