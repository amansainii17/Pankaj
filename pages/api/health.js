export default function handler(req, res) {
  res.status(200).json({
    status: 'ok',
    service: 'Pankaj Light Decoration API',
    timestamp: new Date().toISOString(),
  });
}
