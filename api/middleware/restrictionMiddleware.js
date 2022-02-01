const { decodeToken } = require("../utils/tokenUtils");
const Journals = require("../models/journalsModel");

function validateAndDecodeToken(req, res, next) {
  const token = req.headers.authorization;
  if (!token) {
    return next({
      status: 401,
      message: "Token is required",
    });
  } else {
    const validToken = decodeToken(token);
    if (!validToken.user_id || !validToken.username) {
      return next({
        status: 401,
        message: "Provided token is invalid",
      });
    }
    req.decodedToken = validToken;
    return next();
  }
}

/*
 *
 * Below must be called AFTER `validateAndDecodeToken()`
 *
 */

function compareUserParamsAndTokenID(req, res, next) {
  const { user_id } = req.params;
  if (user_id === req.decodedToken.user_id) {
    return next();
  } else {
    return next({
      status: 401,
      message: "You are not permitted to do this action!",
    });
  }
}

async function compareUserAndJournalID(req, res, next) {
  const { journal_id } = req.params;
  const [journal] = await Journals.getBy({ journal_id });
  if (journal.user_id === req.params.user_id) {
    return next();
  } else {
    return next({
      status: 401,
      message: "You are not permitted to do this action!",
    });
  }
}

module.exports = {
  validateAndDecodeToken,
  compareUserParamsAndTokenID,
  compareUserAndJournalID,
};
