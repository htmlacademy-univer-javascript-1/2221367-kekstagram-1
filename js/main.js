import { addPictures } from './thumbnail.js';
import { photos } from './mocks.js';
import { renderUploadForm } from './form.js';
import { initEffects } from './effect-filters.js';

addPictures(photos);
renderUploadForm();
initEffects();
