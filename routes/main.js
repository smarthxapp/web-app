const express = require("express");
const router = express.Router();
const authController = require("../controllers/auth");
const homeController = require("../controllers/home");
const postsController = require("../controllers/posts");
const { ensureAuth, ensureGuest } = require("../middleware/auth");

//Main Routes
router.get("/", homeController.getIndex);
router.get("/index2", homeController.getIndex2);
router.get("/404", homeController.get404);
router.get("/dashboard", ensureAuth, homeController.getDashboard);
router.get("/recent-activity", ensureAuth, homeController.getActivity);
router.get("/prescriptions", ensureAuth, homeController.getPrescriptions);
router.get("/diagnostic-lab-reports", ensureAuth, homeController.getDiagnosticLabReports);
router.get("/appointments", ensureAuth, homeController.getAppointments);
router.get("/ekg", ensureAuth, homeController.getEkg);
router.get("/my-hcps", ensureAuth, homeController.getMyHcps);
router.get("/find-hcp", ensureAuth, homeController.getFindHcp);
// router.get("/health-journal", ensureAuth, postsController.getHealthJournal);
router.get("/settings-account", ensureAuth, homeController.getSettingsAccount);
router.get("/settings-notifications", ensureAuth, homeController.getSettingsNotifications);
router.get("/settings-permissions", ensureAuth, homeController.getSettingsPermissions);
router.get("/billing-payments", ensureAuth, homeController.getBillingPayments);

//Health Journal Routes
router.get("/health-journal", ensureAuth, postsController.getHealthJournal);
// router.get("/feed", ensureAuth, postsController.getFeed);

//Auth Routes
router.get("/login", authController.getLogin);
router.post("/login", authController.postLogin);
router.get("/logout", authController.logout);
router.get("/signup", authController.getSignup);
router.post("/signup", authController.postSignup);

//The 404 Route (ALWAYS Keep this as the last route). Currently disabled because it sends post pages to 404. <-- how to fix??
// router.get('*', homeController.get404);

module.exports = router;
