import orderService from "../services/orderService.js";

const createOrder = async (req, res) => {
  const input = req.body;

  const user = req.user;

  try {
    const order = await orderService.createOrder({ userId: user.id, ...input });

    res.status(201).json(order);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const getAllOrdersByUser = async (req, res) => {
  const user = req.user;

  try {
    const orders = await orderService.getAllOrdersByUser(user.id);

    res.json(orders);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

export { createOrder, getAllOrdersByUser };
