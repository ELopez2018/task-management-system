import { Injectable } from "@angular/core";
import { NgbModal, NgbModalOptions, NgbModalRef } from "@ng-bootstrap/ng-bootstrap";
import { ModalContainerComponent } from "src/app/shared/modal/modal-container/modal-container.component";
import { ModalTitleEnums, ModalIconEnums, ModalResponseEnums, ModalTypeEnums } from "../modal-core/modal.enums";

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  constructor(
    private ngbModal: NgbModal
  ) { }

  private modalOptions: NgbModalOptions = {
    backdrop: 'static',
    backdropClass: 'customBackdrop',
    centered: true,
  };

  private modalRef!: NgbModalRef;

  public yesOrNot(
    titulo: ModalTitleEnums,
    mensaje: string,
    Icon: ModalIconEnums,
    textButton: ModalResponseEnums = ModalResponseEnums.CONTINUAR
  ) {
    this.modalRef = this.ngbModal.open(ModalContainerComponent, this.modalOptions);
    this.modalRef.componentInstance.typeModal = ModalResponseEnums.SI;
    this.modalRef.componentInstance.titulo = titulo;
    this.modalRef.componentInstance.mensaje = mensaje;
    this.modalRef.componentInstance.Icon = Icon;
    this.modalRef.componentInstance.textButton = textButton;
    return this.modalRef.result
  }


  public info(subtitle: string, message: string, title: ModalTitleEnums, type: ModalTypeEnums) {
    this.modalRef = this.ngbModal.open(ModalContainerComponent, this.modalOptions);
    this.modalRef.componentInstance.mensaje = message;
    this.modalRef.componentInstance.subTitle = subtitle;
    this.modalRef.componentInstance.titulo = title;
    this.modalRef.componentInstance.modalType = type;
    return this.modalRef.result
  }

  public addNewTask() {
    this.modalRef = this.ngbModal.open(ModalContainerComponent, this.modalOptions);
    this.modalRef.componentInstance.modalType = ModalTypeEnums.ADDTASK;
    return this.modalRef.result
  }

  public loading() {
    this.modalRef = this.ngbModal.open(ModalContainerComponent, this.modalOptions);
    this.modalRef.componentInstance.modalType = ModalTypeEnums.LOADER;
    return this.modalRef.result
  }

  public close() {
    if (this.modalRef) {
      this.modalRef.dismiss()
    }
  }
}
