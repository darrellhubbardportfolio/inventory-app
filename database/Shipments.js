let year = new Date().getFullYear();
let month = new Date().getMonth() + 1;
let date = new Date().getDate();

// correct the month value length to be always 2 digits long
if (month < 10) {
    month = "0" + month;
}

// correct the month value length to be always 2 digits long
if (date < 10) {
    date = "0" + date;
}

let start_date = year + "-" + month + "-" + date;

// check results
console.log("start date: " + start_date);

function create_new_shipment (title, due_date, expense_cost, shipping_cost, origin, destination, sender, receiver ) {
    db.run(`
        INSERT INTO Shipments (title, start_date, due_date, expense_cost, shipping_cost, origin, destination, sender, receiver)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
    `, [ title, start_date, due_date, expense_cost, shipping_cost, origin, destination, sender, receiver  ], function (err) {
        if (err) {
            console.log(err);
        }
        console.log("A new shipment - " + title + " - has been created!");
    });
}