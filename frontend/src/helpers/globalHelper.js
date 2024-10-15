export const formatDateTime = (dateString) => {
    const date = new Date(dateString);
    const formattedDate = date.toLocaleDateString(); // Format the date
    const formattedTime = date.toLocaleTimeString(); // Format the time
    return `${formattedDate} ${formattedTime}`;
};