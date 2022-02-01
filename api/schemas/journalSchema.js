const yup = require("yup");

const journalSchema = yup.object().shape({
  user_id: yup.string().required("A user_id is required"),
  title: yup.string().required("A title is required"),
  journal_entry: yup.string().required("A journal_entry is required"),
});

module.exports = {
  journalSchema,
};
