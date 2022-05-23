const mysql = require("mysql2/promise");
const config = require("./config");

async function createOrder() {
  const connection = await mysql.createConnection(config.db);
  await connection.execute("SET TRANSACTION ISOLATION LEVEL READ COMMITTED");
  console.log("Finished setting the isolation level to read committed");
  //set wait timeout and lock wait timeout as per need.
  await connection.beginTransaction();
  try {
    await connection.execute(
      `update orderDetails set quantityOrdered = 35 where orderNumber = 10100 && productCode="S18_1749"`
    );

    const [allProduct] = await connection.execute(
      `select count(productName) as productSize from products`
    );
    console.log(`All product is ${allProduct[0].productSize}`);
    const [deleteProduct] = await connection.execute(
      `delete from products where productCode= "S12_3148"`
    );
    console.log(`1969 Corvair Monza is delete`);
    const [allProduct1] = await connection.execute(
      `select count(productName) from products`
    );
    console.log(`All product is ${allProduct1[0].productSize1}`);
    await connection.commit();
    return `successed`;
  } catch (err) {
    console.error(`Error occurred while creating order: ${err.message}`, err);
    connection.rollback();
    console.info("Rollback successful");
    return "error creating order";
  }
}

(async function testOrderCreate() {
  console.log(await createOrder());
  process.exit(0);
})();
