module.exports = function(db) {
    return {
        getAllFamilyWords: (req, res) => {
            db.query('SELECT * FROM words WHERE topic = ?', ['family'], (err, rows) => {
                if (err) {
                    console.error(err.message);
                    return res.status(500).send('Server error');
                }
                return res.status(200).json(rows);
            });
        },
        getAllClothesWords: (req, res) => {
            db.query('SELECT * FROM words WHERE topic = ?', ['clothes'], (err,rows) => {
                if(err){
                    console.error(err.message);
                    return res.status(500).send('Server error');
                }
                return res.status(200).json(rows);
            })
        },
        getAllFoodWords: (req, res) => {
            db.query('SELECT * FROM words WHERE topic = ?', ['food'], (err,rows) => {
                if(err){
                    console.error(err.message);
                    return res.status(500).send('Server error');
                }
                return res.status(200).json(rows);
            })
        }
    };
};