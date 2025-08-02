import express from 'express'
import { ChangeJobApplicationsStatus, changeVisibility, getCompanyData, getCompanyJobApplicants, getCompanyPostedJobs, loginCompany, postJob, registerCompany } from '../controllers/CompanyController.js'
import upload from '../config/multer.js'
import { protectCompany } from '../middleware/AuthMiddleware.js'

const router = express.Router()

// register a company
router.post('/register', upload.single('image'), registerCompany)

// company login
router.post('/login',loginCompany)

// get company data
router.get('/company',protectCompany ,getCompanyData)

// post a job
router.post('/post-job',protectCompany, postJob)

// getapplicatntdata of company
router.get('/applicants',protectCompany, getCompanyJobApplicants)

// get company job list
router.get('/list-jobs',protectCompany,getCompanyPostedJobs)

// change application status
router.post('/change-status',protectCompany, ChangeJobApplicationsStatus)

//chnage application visibility
router.post('/change-visiblity',protectCompany, changeVisibility)

export default router;