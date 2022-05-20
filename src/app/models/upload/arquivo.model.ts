export interface ArquivoModel {
  id: number;
  usuarioId: number;
  tusFileId: string;
  nome: string;
  pasta: string;
  descricao: string;
  identificacaoProcesso: string;
  sigilo: boolean;
  tamanhoByte: number;
  temCertificado: boolean;
  gerarCertificado: boolean;
}
