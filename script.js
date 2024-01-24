const countdownElement = document.getElementById('countdown');

    setTimeout(() => {
        countdownElement.innerHTML = 10;

        setTimeout(() => {
            countdownElement.innerHTML = 9;

            setTimeout(() => {
                countdownElement.innerHTML = 8;

                setTimeout(() => {
                    countdownElement.innerHTML = 7;

                    setTimeout(() => {
                        countdownElement.innerHTML = 6;

                        setTimeout(() => {
                            countdownElement.innerHTML = 5;

                            setTimeout(() => {
                                countdownElement.innerHTML = 4;

                                setTimeout(() => {
                                    countdownElement.innerHTML = 3;

                                    setTimeout(() => {
                                        countdownElement.innerHTML = 2;

                                        setTimeout(() => {
                                            countdownElement.innerHTML = 1;

                                            setTimeout(() => {
                                                countdownElement.innerHTML = "Happy Independence Day!";
                                            }, 1000);
                                        }, 1000);
                                    }, 1000);
                                }, 1000);
                            }, 1000);
                        }, 1000);
                    }, 1000);
                }, 1000);
            }, 1000);
        }, 1000);
    }, 1000);

