import { Request, Response } from "express";
import { google } from "googleapis";
import { authJWT } from "../../driver/GoogleAPI.connect";

const query = async (req: Request, res: Response) => {

  try {
    const { id, fileId } = req.params;
    const fileName = `${id}.md`;
    const fileContent = `# Мій файл Markdown за ID: ${fileId}`;

    const drive = google.drive({ version: 'v3', auth: authJWT });
    const fileMetadata = {
      name: fileName,
      mimeType: 'text/markdown',
      parents: ['root'], // Опціонально: вказуємо папку, в яку додати файл (за замовчуванням - коренева папка)
    };

    const media = {
      mimeType: 'text/markdown',
      body: fileContent,
    };

    const response = drive.files.create({
      media,
      fields: 'id, webViewLink', // Вказуємо, які поля відповіді ми хочемо отримати (ID та посилання на файл)
    });

    const createdFileId = (await response).data.id;
    const webViewLink = (await response).data.webViewLink;
    console.log('Новий файл успішно створений з ID:', createdFileId);

    res.status(200).json({ fileId: createdFileId, webViewLink });
  } catch (error) {
    console.error('Помилка при створенні нового файла:', error);
    res.status(500).json({ error: 'Помилка при створенні нового файла.' });
  }
};

export default query;