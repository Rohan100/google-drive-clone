import { Router } from 'express';
import multer from 'multer';

const router = Router();
const upload = multer({ dest: 'uploads/' });

router.post('/upload', upload.single('file'), (req, res) => {
  res.json({ message: 'File uploaded', file: req.file });
});

router.get('/', (req, res) => {
  res.json({ files: [] });
});

export default router;