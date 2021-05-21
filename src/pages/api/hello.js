const apiHello = (req, res) => {
    return res.status(200).json({ message: `Message Hello result api... ${process.env.ENVIRONMENT}` });
};

export default apiHello;
