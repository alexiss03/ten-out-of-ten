<script setup lang="ts">
import FooterView from './FooterView.vue';
import HeaderView from './HeaderView.vue';
</script>

<template>
  <body>
    <HeaderView/>
    <div class="section1">
    <div id="section1-header">Return and Exchange Policy: Video Verification Required</div>
    <div id="section1-body">
      <p>At [Your Company Name], we are committed to ensuring that you have a seamless shopping experience with us. To maintain the quality of our products and provide the best service, we have implemented a return and exchange policy that requires video verification upon opening the product. This policy is designed to protect both our customers and the integrity of our products.</p>
    </div>

    <div id="section1-header">1. Eligibility for Returns and Exchanges:</div>
    <div id="section1-body">
      <p>We understand that sometimes, despite our best efforts, issues can arise with your order. While we do not accept returns for wrong size orders (due to our size chart and order verification process), we do offer returns and exchanges for the following reasons:</p>
      <ul>
        <li>Defective or Damaged Products: If you receive a defective or damaged item, please contact us immediately to initiate the return or exchange process.</li>
        <li>Wrong Item Shipped: If we shipped the wrong item, we apologize for the error, and we'll make it right for you.</li>
      </ul>
    </div>

    <div id="section1-header">2. Video Verification Process:</div>
    <div id="section1-body">
      <p>To process a return or exchange for eligible reasons, we require a video recording of the unboxing experience. This video should clearly capture the following:</p>
      <ul>
        <li>Unboxing the package and showing the product's packaging.</li>
        <li>Revealing the product inside the packaging.</li>
        <li>Highlighting and describing any defects or damages, if applicable.</li>
        <li>If the wrong item was shipped, please clearly demonstrate the received item.</li>
        <li>Ensure the video clearly shows the entire unboxing process.</li>
      </ul>
    </div>

    <div id="section1-header">3. How to Submit Your Video Verification:</div>
    <div id="section1-body">
      <p>Once you have created the video, please follow these steps:</p>
      <p>a. Contact our Customer Support Team at [Customer Support Email] or [Customer Support Phone Number] to initiate your return or exchange request.</p>
      <p>b. Our team will provide you with a unique return authorization number and further instructions.</p>
      <p>c. Upload your unboxing video to a file-sharing platform (such as Google Drive or Dropbox) and share the link with our team. Please make sure the video is easily accessible.</p>
      <p>d. Once we receive your video and confirm its accuracy, we will proceed with processing your return or exchange.</p>
    </div>

    <div id="section1-header">4. Important Notes:</div>
    <div id="section1-body">
      <p>- Ensure the video quality is clear and provides a complete view of the unboxing process.</p>
      <p>- We recommend recording the unboxing in a well-lit area to clearly show any defects or damages.</p>
      <p>- Failure to submit an accurate and complete video may result in delays in processing your return or exchange.</p>
      <p>- Return and exchange requests should be initiated within [number of days] days from the date of delivery.</p>
      <p>- All returned items must be in their original condition, with tags and labels attached.</p>
      <p>- We reserve the right to deny a return or exchange if the video verification process is not followed.</p>
    </div>

    <div id="section1-header">5. Processing Your Request:</div>
    <div id="section1-body">
      <p>Once we have received and verified your video, we will proceed with processing your return or exchange. You will receive an email notification with the status of your request, and our team will work diligently to resolve the issue and provide you with a satisfactory solution.</p>
      <p>We appreciate your understanding and cooperation with our video verification policy, as it helps us maintain the quality of our products and ensures a consistent shopping experience for all our customers. If you have any questions or need assistance, please don't hesitate to reach out to our Customer Support Team.</p>
      <p>Thank you for choosing [Your Company Name], and we look forward to serving you.</p>
    </div>

    </div>
    <FooterView/>
  </body>
</template>

<style scoped>

#section1-header {
  text-align: left;
  font-size: 20px;
  font-family: 'Coves-Bold';
  padding-top: 20px;
  padding-left: 40px;
}

#section1-body {
  text-align: left;
  padding-left: 40px;
  padding-right: 40px;
  text-align: justified;
}

.section1 {
  background: #f4f3ef;
  width: 100vw;
  padding-top: 100px;
  padding-bottom: 100px;
  vertical-align: middle;
  display: flex;
  flex-direction: column;
  color: #000000;
  height: 100%;
  
}

</style>
