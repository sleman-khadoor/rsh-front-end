<template>
    <div class="container mt-3 px-lg-5 px-md-3 px-sm-1">
    <div class="input-group px-lg-5 px-md-3 px-sm-1">
      <label class="form-control bg-snow p-0 border-0">
      <input type="text" class="form-control bg-snow" style="height:50px !important;" placeholder="Search for a book" aria-label="Search for a book">
      </label>
      <div class="bg-snow">
        <div class="vr bg-choco opacity-1" style="width: 3px;margin-top: 10px;min-height: 1.7em !important;"></div>
      </div>
      <div class="input-group-append">
        <button class="snow btn btn-outline-secondary dropdown-toggle text-choco bg-snow font-small ff-regular" 
        style="height:50px !important;" role="button" data-bs-toggle="dropdown" aria-expanded="false">
        Book Name
        </button>
        <div class="dropdown-menu dropdown-menu-right bg-snow font-x-small ff-regular">
          <div class="d-flex text-center p-lg-1">
            <img src="@/assets/icon/book-name.svg" class="d-block my-auto mx-1" alt="..." width="20" height="20">
            <a class="dropdown-item text-choco px-1" href="#">Book Name</a>
          </div>
          <div class="hr bg-choco opacity-1" style="height: 1px;"></div>
          <div class="d-flex text-center p-lg-1">
            <img src="@/assets/icon/author-name.svg" class="d-block my-auto mx-1" alt="..." width="20" height="20">
            <a class="dropdown-item text-choco px-1" href="#">Author Name</a>
          </div>
          
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.input-group .dropdown-toggle {
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  border-left: none;
  border-color: #d4d4d8;
}

.input-group .form-control {
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  border-right: none;
}

.input-group .dropdown-menu {
  min-width: auto;
}

// search 
label {
  position: relative;
}

label:before {
  content: "";
  position: absolute;
  left: 10px;
  top: 0;
  bottom: 0;
  width: 20px;
  background: url("@/assets/icon/search-normal.svg") center / contain no-repeat;
}

input {
  padding: 10px 30px;
}

</style>