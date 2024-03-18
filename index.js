const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());




app.post('/bfhl', (req, res) => {

        let data = req.body.data;
        let user_id = "satvik_bhardwaj_16082003";
        let email = "satvik1315.be21@chitkarauniversity.edu.in";
        let roll_number = "2111981315";
        let odd_numbers = [];
        let even_numbers = [];
        let alphabets = [];


        data.forEach(element => {
            if (typeof element === 'string' && isNaN(element)) {
                alphabets.push(element.toUpperCase());
            } else if (!isNaN(element)) {
                if (parseInt(element) % 2 === 0) {
                    even_numbers.push(element);
                } else {
                    odd_numbers.push(element);
                }
            }
        });

        res.json({
          is_success: true,
          user_id: user_id,
          email: email,
          roll_number: roll_number,
          odd_numbers: odd_numbers,
          even_numbers: even_numbers,
          alphabets: alphabets
      });
});


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});