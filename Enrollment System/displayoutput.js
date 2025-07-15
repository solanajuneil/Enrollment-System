// const form = document.getElementById('form')
// const phoneNumber = document.getElementById('phoneNumber')
// const btn = document.getElementById('btn')
// const errorElement = document.getElementById('errorElement')

// // btn.addEventListener('click', (e) => {
// //     let messages = []
// //     if (phoneNumber.value.length !== 10 && phoneNumber.value.length !== 11) {
// //     messages.push('Phone Number must be either 10 or 11 digits');
// //     }
 
// //     if (messages.length > 0) {
// //         e.preventDefault()
// //         errorElement.innerText = messages.join(', ')
// //    }
    
// // })

// function displayInformation() {
//     const schoolType = document.getElementById('schoolType').value
//     const yearLevel = document.getElementById('yearLevel').value

//     document.getElementById('first_name').innerText = schoolType
//     document.getElementById('year_Level').innerText = yearLevel
// }
function displayInfo() {


    //Get the input data->>>>>>>>>>>>>>>>>>

    //Admin Type Data
    const admin_type_data = document.getElementById("adminType").value
    const year_level_data = document.getElementById("yearLevel").value

    //Student Information Data
    const first_name_data = document.getElementById('firstName').value
    const middle_name_data = document.getElementById("middleName").value
    const last_name_data = document.getElementById("lastName").value
    const suffix_name_data = document.getElementById("suffixName").value
    const genderRadioButtons = document.getElementsByName("gender");
    let gender_data;
    for (const radioButton of genderRadioButtons) {
    if (radioButton.checked) {
        gender_data = radioButton.value;
        break; 
    }
    }
    const status_data = document.getElementById("status").value
    const citizenship_data = document.getElementById("citizenship").value
    const date_of_birth_data = document.getElementById("dateOfBirth").value
    const birth_place_data = document.getElementById("birthPlace").value
    const religion_data = document.getElementById("religion").value









    //Output the data

    //output admin type data
    document.getElementById("admin_type_data").innerText = admin_type_data
    document.getElementById("year_level_data").innerText = year_level_data

    //output student information data
    document.getElementById("first_name_data").innerText = first_name_data
    document.getElementById("middle_name_data").innerText = middle_name_data
    document.getElementById("last_name_data").innerText = last_name_data
    document.getElementById("suffix_name_data").innerText = suffix_name_data
    document.getElementById("gender_data").innerText = gender_data
    document.getElementById("status_data").innerText = status_data
    document.getElementById("citizenship_data").innerText = citizenship_data
    document.getElementById("date_of_birth_data").innerText = date_of_birth_data
    document.getElementById("birth_place_data").innerText = birth_place_data
     document.getElementById("religion_data").innerText = religion_data

}

//Student Information Data




// //Address Information Data

// //current address data
// const street_number_data = document.getElementById("streetNumber_current").value
// const street_data = document.getElementById("street_current").value
// const subdivision_village_bldg_data = document.getElementById("subdivision_village_bldg_current").value
// const barangay_data = document.getElementById("barangay_current").value
// const city_municipality_data = document.getElementById("city_municipality_current").value
// const province_data = document.getElementById("province_current").value
// const zip_data = document.getElementById("zip_current").value
// //premanent address data 
// const street_number_data1= document.getElementById("streetNumber_premanent").value
// const street_data1= document.getElementById("streetPremanentAddress").value
// const subdivision_village_bldg_data1= document.getElementById("subdivision_village_bldg_PremanentAddress").value
// const barangay_data1= document.getElementById("barangay_PremanentAddress").value
// const city_municipality_data1 = document.getElementById("city_municipality_PremanentAddress").value
// const province_data1= document.getElementById("province_PremanentAddress").value
// const zip_data1= document.getElementById("zip_PremanentAddress").value

// //Contact Information data 
// const phone_number_data = document.getElementById("phoneNumber").value
// const email_data = document.getElementById("email").value

// //Current or Last School Attended data
// const school_type_data = document.getElementById("schoolType").value
// const name_of_school_data = document.getElementById("name_of_school").value
// const program_or_track_data = document.getElementById("program_or_track").value
// const date_of_graduation_data = document.getElementById("date_of_graduation").value
// const school_year_data = document.getElementById("school_year").value
// const year_grade_data = document.getElementById("year_grade").value


// //Parent & Guardian"s Information data

// //father information
// const first_name_father_data = document.getElementById("firstNameFather").value
// const last_name_father_data = document.getElementById("lastNameFather").value
// const middle_name_father_data = document.getElementById("middleInitialFather").value
// const suffix_name_father_data = document.getElementById("suffixNameFather").value
// const email_father_data = document.getElementById("email_father").value
// const phone_number_father_data = document.getElementById("phoneNumberFather").value
// const occupation_father_data = document.getElementById("occupationFather").value
// //mother information
// const first_name_mother_data = document.getElementById("firstNameMother").value
// const last_name_mother_data = document.getElementById("lastNameMother").value
// const middle_name_mother_data = document.getElementById("middleInitialMother").value
// const suffix_name_mother_data = document.getElementById("suffixNameMother").value
// const email_mother_data = document.getElementById("email_mother").value
// const phone_number_mother_data = document.getElementById("phoneNumberMother").value
// const occupation_mother_data = document.getElementById("occupationMother").value
// //guardian information
// const first_name_guardian_data = document.getElementById("firstNameGuardian").value
// const last_name_guardian_data = document.getElementById("lastNameGuardian").value
// const middle_name_guardian_data = document.getElementById("middleInitialGuardian").value
// const suffix_name_guardian_data = document.getElementById("suffixNameGuardian").value
// const email_guardian_data = document.getElementById("email_guardian").value
// const phone_number_guardian_data = document.getElementById("phoneNumberGuardian").value
// const occupation_guardian_data = document.getElementById("occupationGuardian").value
// const relationship_guardian_data = document.getElementById("relationship_guardian").value


// //Output the data




// //output current address information
// document.getElementById("street_number_data").innerText = street_number_data
// document.getElementById("street_data").innerText = street_data
// document.getElementById("subdivision_village_bldg_data").innerText = subdivision_village_bldg_data
// document.getElementById("barangay_data").innerText = barangay_data
// document.getElementById("city_municipality_data").innerText = city_municipality_data
// document.getElementById("province_data").innerText = province_data
// document.getElementById("zip_data").innerText = zip_data

// //output premanent address information
// document.getElementById("street_number_data1").innerText = street_number_data1
// document.getElementById("street_data1").innerText = street_data1
// document.getElementById("subdivision_village_bldg_data1").innerText = subdivision_village_bldg_data1
// document.getElementById("barangay_data1").innerText = barangay_data1
// document.getElementById("city_municipality_data1").innerText = city_municipality_data1
// document.getElementById("province_data1").innerText = province_data1
// document.getElementById("zip_data1").innerText = zip_data1

// //output contact details 
// document.getElementById("phone_number_data").innerText = phone_number_data
// document.getElementById("email_data").innerText = email_data

// //output current or last attended school
// document.getElementById("school_type_data").innerText = school_type_data
// document.getElementById("name_of_school_data").innerText = name_of_school_data
// document.getElementById("program_or_track_data").innerText = program_or_track_data
// document.getElementById("date_of_graduation_data").innerText = date_of_graduation_data
// document.getElementById("school_year_data").innerText = school_year_data
// document.getElementById("year_grade_data").innerText = year_grade_data

// //output father information 
// document.getElementById("first_name_father_data").innerText = first_name_father_data
// document.getElementById("last_name_father_data").innerText = last_name_father_data
// document.getElementById("middle_name_father_data").innerText = middle_name_father_data
// document.getElementById("suffix_name_father_data").innerText = suffix_name_father_data
// document.getElementById("email_father_data").innerText = email_father_data
// document.getElementById("phone_number_father_data").innerText = phone_number_father_data
// document.getElementById("occupation_father_data").innerText = occupation_father_data

// //output mother information 
// document.getElementById("first_name_mother_data").innerText = first_name_mother_data
// document.getElementById("last_name_mother_data").innerText = last_name_mother_data
// document.getElementById("middle_name_mother_data").innerText = middle_name_mother_data
// document.getElementById("suffix_name_mother_data").innerText = suffix_name_mother_data
// document.getElementById("email_mother_data").innerText = email_mother_data
// document.getElementById("phone_number_mother_data").innerText = phone_number_mother_data
// document.getElementById("occupation_mother_data").innerText = occupation_mother_data

// //output guardian"s information 
// document.getElementById("first_name_guardian_data").innerText = first_name_guardian_data
// document.getElementById("last_name_guardian_data").innerText = last_name_guardian_data
// document.getElementById("middle_name_guardian_data").innerText = middle_name_guardian_data
// document.getElementById("suffix_name_guardian_data").innerText = suffix_name_guardian_data
// document.getElementById("email_guardian_data").innerText = email_guardian_data
// document.getElementById("phone_number_guardian_data").innerText = phone_number_guardian_data
// document.getElementById("occupation_guardian_data").innerText = occupation_guardian_data
// document.getElementById("relationship_guardian_data").innerText = relationship_guardian_data
