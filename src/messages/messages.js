/**
 * Messages
 *
 * Created by Alex Elkin on 22.11.2017.
 */

import ruMessages from './ruMessages'
import enMessages from './enMessages'

const messages = {
    ru : ruMessages,
    en : enMessages
};

export const loadMessages = (locale) => {
    return messages[locale] || messages.en;
};

export default messages;