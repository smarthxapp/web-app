module.exports = {
  getIndex: (req, res) => {
    res.render("index.ejs");
  },
  getIndex2: (req, res) => {
    res.render("index2.ejs");
  },
  get404: (req, res) => {
    res.status(404).render("404.ejs");
  },
  getDashboard: (req, res) => {
    res.render("dashboard.ejs", { user: req.user });
  },
  getActivity: (req, res) => {
    res.render("recent-activity.ejs", { user: req.user });
  },
  getPrescriptions: (req, res) => {
    res.render("prescriptions.ejs", { user: req.user });
  },
  getDiagnosticLabReports: (req, res) => {
    res.render("diagnostic-lab-reports.ejs", { user: req.user });
  },
  getAppointments: (req, res) => {
    res.render("appointments.ejs", { user: req.user });
  },
  getEkg: (req, res) => {
    res.render("ekg.ejs", { user: req.user });
  },
  getMyHcps: (req, res) => {
    res.render("my-hcps.ejs", { user: req.user });
  },
  getFindHcp: (req, res) => {
    res.render("find-hcp.ejs", { user: req.user });
  },
  getHealthJournal: (req, res) => {
    res.render("health-journal.ejs", { user: req.user });
  },
  getSettingsAccount: (req, res) => {
    res.render("settings-account.ejs", { user: req.user });
  },
  getSettingsNotifications: (req, res) => {
    res.render("settings-notifications.ejs", { user: req.user });
  },
  getSettingsPermissions: (req, res) => {
    res.render("settings-permissions.ejs", { user: req.user });
  },
  getBillingPayments: (req, res) => {
    res.render("billing-payments.ejs", { user: req.user });
  },
};