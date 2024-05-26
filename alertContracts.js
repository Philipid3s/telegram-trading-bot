const axios = require("axios");
const config = require('./config');

module.exports = function checkContract() {
    console.log("Checking for new contracts...");

    axios({
        method: 'get',
        url: 'http://0.0.0.0/api',
        timeout: 30 * 1000, // 30 seconds timeout
    })
    .then(response => {
        const lcs = response.data;

        lcs.forEach(alert => {
            config.users.forEach(user => {
                if (user.alert) {
                    const url = `https://api.telegram.org/bot${config.apiKey}/sendMessage?chat_id=${user.id}&text=${encodeURIComponent(alert)}`;

                    axios.get(url)
                        .then(response => {
                            console.log(`Alert sent to ${user.id}: ${response.data.result.text}`);
                        })
                        .catch(error => {
                            console.error(`Failed to send alert to ${user.id}:`, error);
                        });
                }
            });
        });
    })
    .catch(error => {
        console.error('Error fetching contracts:', error);
    });
};
