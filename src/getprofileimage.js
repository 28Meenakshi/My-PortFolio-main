function getProfileImage(name) {
    const letters = "0123456789ABCDEF";
    let color = "";
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    const url = "https://ui-avatars.com/api/?name="
    // Generate the profile image URL using the random color
    const profileImgUrl =`${url}${name}&background=${color}&color=FFFFFF`;
    
    return profileImgUrl;
}
export default getProfileImage;