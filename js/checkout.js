// checkout.js

$(document).ready(function() {
    // QR Code for Kpay - Replace with actual QR code URL for your shop
    const kpayQrCodeUrl = 'https://example.com/kpay-qr-code.png';

    // Handle payment method change
    $('input[name="payment-method"]').change(function() {
        if ($(this).val() === 'kpay') {
            $('#kpay-qr-container').show();
        } else {
            $('#kpay-qr-container').hide();
        }
    });

    // Generate QR code for Kpay payment
    $('#kpay-qr-code').qrcode({
        text: kpayQrCodeUrl,
        width: 128,
        height: 128
    });

    // Handle form submission
    $('#checkout-form').submit(function(event) {
        event.preventDefault(); // Prevent default form submission

        const selectedPaymentMethod = $('input[name="payment-method"]:checked').val();
        const paymentReceipt = $('#payment-receipt').prop('files')[0];

        if (selectedPaymentMethod === 'kpay' && !paymentReceipt) {
            alert('Please upload a screenshot of your payment receipt.');
            return;
        }

        // Process the payment confirmation
        // Redirect to thank you page after successful payment
        window.location.href = 'thankyou.html';
    });
});
