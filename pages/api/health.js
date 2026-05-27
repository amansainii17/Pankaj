export default function handler(req, res) {
  res.status(200).json({
    status: 'ok',
    service: 'GTA Light Decoration API',
    timestamp: new Date().toISOString(),
  });
}
